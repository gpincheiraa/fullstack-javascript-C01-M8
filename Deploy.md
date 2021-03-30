# Deploy steps

Toda la lógica de deploy está en el script deploy dentro de la carpeta CI

Puede estar en diferentes lenguajes(bash, ruby, java, groovy, etc). 

Estos script probablemente corran en dockers o sistemas de producción, con librerías restringidas por temas de vulnerabilidades.

Estos script se ejecutan en momentos y entornos delicados. 
