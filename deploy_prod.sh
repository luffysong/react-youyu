#!/bin/bash

npm run build:client

cdnstr="/data/work/asset/krdatah5"
####### CDN
#site1
rsync -rvltOD ./build/client/* ali-rong-proxy-01:$cdnstr
rsync -rvltOD ./build/client/* ali-rong-api-01:$cdnstr

#site2
rsync -rvltOD ./build/client/* ali-rong-proxy-02:$cdnstr
rsync -rvltOD ./build/client/* ali-rong-api-02:$cdnstr

###### 业务逻辑
pathstr="/data/work/frontend/prod/krdatah5/dist"
if [ $1 = 'site3' ]; then
    ssh ali-rong-proxy-03 "mkdir -p $pathstr"
    rsync -rvltOD ./build/client/* ali-rong-proxy-01:$pathstr
elif [ $1 = 'site4' ]; then
    ssh ali-rong-proxy-04 "mkdir -p $pathstr"
    rsync -rvltOD ./build/client/* ali-rong-proxy-02:$pathstr
elif [ $1 = 'sim' ]; then
    ssh ali-rong-sim-01 "mkdir -p $pathstr"
    rsync -rvltOD ./build/client/* ali-rong-sim-01:$pathstr
elif [ $1 = 'all' ]; then
    ssh ali-rong-proxy-01 "mkdir -p $pathstr"
    ssh ali-rong-proxy-02 "mkdir -p $pathstr"
    ssh ali-rong-sim-01 "mkdir -p $pathstr"
    rsync -rvltOD ./build/client/* ali-rong-proxy-01:$pathstr
    rsync -rvltOD ./build/client/* ali-rong-proxy-02:$pathstr
    rsync -rvltOD ./build/client/* ali-rong-sim-01:$pathstr
fi
