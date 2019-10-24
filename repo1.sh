sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)


cd /home/ubuntu
rm -rf repo1
git clone https://github.com/andalike/repo1.git
cd repo1


sudo docker build -t andalike/node-web-app .
sudo docker run -p 49160:8080 -d andalike/node-web-app