sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)


cd /home/ubuntu
rm -rf repo2
git clone https://github.com/andalike/repo2.git
cd repo2


sudo docker build -t andalike/repo2 .
sudo docker run -p 49160:8080 -d andalike/repo2