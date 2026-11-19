import os

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

database_uri = os.environ.get("DATABASE_URL", "sqlite:///portfolio.db")
if database_uri.startswith("postgres://"):
    database_uri = database_uri.replace("postgres://", "postgresql://", 1)

app.config["SQLALCHEMY_DATABASE_URI"] = database_uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    github_url = db.Column(db.String(255))

    def to_dict(self):
        return {"id": self.id, "title": self.title,
                "description": self.description, "github_url": self.github_url}

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)

@app.route("/api/projects")
def get_projects():
    return jsonify([p.to_dict() for p in Project.query.all()])

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/api/messages", methods=["POST"])
def save_message():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or "@" not in email or len(message) < 10:
        return jsonify({"error": "Please provide a valid name, email, and message."}), 400

    msg = Message(name=name, email=email, message=message)
    db.session.add(msg)
    db.session.commit()
    return jsonify({"status": "saved"}), 201

def initialize_database():
    with app.app_context():
        db.create_all()
        if Project.query.count() == 0:
            db.session.add_all([
                Project(title="Student Information System",
                        description="Manages student records.",
                        github_url="https://github.com/MartinBellido/student-info-system"),
                Project(title="Tic Tac Toe",
                        description="A two-player game.",
                        github_url="https://github.com/MartinBellido/tic-tac-toe"),
            ])
            db.session.commit()

initialize_database()

if __name__ == "__main__":
    app.run(port=5000, debug=True)