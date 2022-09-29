**Prepare react:**
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

**Prepare django:**
python3 -m venv env
source env/bin/activate
python3 -m pip install django djangorestframework django-c
ors-headers

**Starting the app:**
python3 todo/manage.py runserver
npm start
