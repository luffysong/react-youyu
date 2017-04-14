#!/bin/bash
# $1 - docker-01 docker02
# $2 - test01 test02
npm run build:client:$2

path="/data/docker/$2/work/frontend/prod/36kr/krdatah5/dist"
ssh ali-rong-$1 "mkdir -p $path"
rsync -rvltOD ./build/client/* "www@ali-rong-$1:$path"
