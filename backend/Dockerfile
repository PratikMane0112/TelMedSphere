FROM python:3.10-slim-bullseye

WORKDIR /python-docker
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["flask","run", "--host","0.0.0.0"]