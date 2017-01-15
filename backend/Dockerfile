FROM continuumio/anaconda3

# attach current dir
ADD . /tmp/

# install requirements
RUN pip install -r /tmp/requirements.txt

EXPOSE 8000

ENTRYPOINT ["python", "/tmp/app.py"]
