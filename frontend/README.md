# Portfolio

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

The backend uses SQLite by default and creates `portfolio.db` automatically. Set `DATABASE_URL` to use another SQLAlchemy-compatible database.
