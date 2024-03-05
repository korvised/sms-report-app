[//]: # (https://dev.to/rupadana/run-nextjs-using-docker-1a38)

[//]: # (https://nextjs.org/docs/pages/api-reference/next-config-js/output)

```shell
docker build --platform linux/amd64 -t apb.registry-img.com/app/sms-report-app:v1.0.1 .
docker push apb.registry-img.com/app/sms-report-app:v1.0.1
```
