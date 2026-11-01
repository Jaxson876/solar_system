# Solar System Explorer

An interactive 3D solar system with all eight planets, planet facts and comparisons, Sun statistics, a physical-model size calculator, and a ten-question quiz.

## Live website

[Open Solar System Explorer](https://solar-system-explorer-jaxson.newpanda2.chatgpt.site/)

## Run locally

Open `orbit/dist/index.html` in a modern browser, or serve it:

```sh
python3 -m http.server 8000 --directory orbit/dist
```

Visit http://localhost:8000. No dependencies or build step are required.

See [the project notes](orbit/README.md) for controls, data sources, and model limitations.

## Study Hub (Django)

The Django pages live alongside the original explorer. Existing files in
`orbit/` and `jaxsons-games/` are kept separately and unchanged by this setup.

On your Mac, open Terminal and run:

```sh
cd /Users/jaxson/Project/solar_system
source .venv/bin/activate
python manage.py runserver
```

Keep that Terminal running, then open http://127.0.0.1:8000/ for Study Hub.
Click Science, or visit http://127.0.0.1:8000/science/ for Science Study.
Press Control-C to stop the server; run `deactivate` to leave the environment.
The original explorer's optional HTTP server also uses port 8000, so stop it
before starting Django (or run Django with `python manage.py runserver 8001`).

To set up again with Python 3.14.10:

```sh
python3.14 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python manage.py migrate
```

### Where to edit

- `config/settings.py`: project-wide settings; registers the learning app.
- `config/urls.py`: sends page requests to the learning app's URLs.
- `learning/urls.py`: maps named page addresses to views (Python functions).
- `learning/views.py`: selects the template (HTML layout) for each page.
- `learning/templates/learning/base.html`: shared page layout.
- `learning/templates/learning/home.html`: home page and subject cards.
- `learning/templates/learning/science.html`: solar system welcome.
- `learning/static/learning/style.css`: shared appearance. Static files are
  files such as CSS and images sent directly to the browser.

To add Math or English later, add a view, a named URL, and a template following
Science's example, then replace its home page placeholder with a link using
Django's `{% url 'learning:math' %}` or `{% url 'learning:english' %}` tag.
The URL tag looks up a named address so links stay correct if the address changes.

Check the pages with `python manage.py test learning` and
`python manage.py check`. This setup uses local development settings.

The Science page now embeds the existing Solar System Explorer and includes an
“Open Solar System Explorer” link for a full-page view. Its original HTML,
JavaScript, CSS, and textures are served from `orbit/dist/` without moving or
changing them. These explorer routes are for local development (`DEBUG=True`);
a future production deployment will need static-file hosting configured.
