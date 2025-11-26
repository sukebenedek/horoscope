docker login ghcr.io -u sukebenedek


docker build . -t ghcr.io/sukebenedek/horoscope:0.1
docker push ghcr.io/sukebenedek/horoscope:0.1

