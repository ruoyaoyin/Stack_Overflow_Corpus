FROM python:3.9.5

RUN python3 -m pip install --upgrade pip setuptools wheel

COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt

COPY . .

EXPOSE 9999

ENTRYPOINT [ "python3" ]

CMD ["backend.py"]