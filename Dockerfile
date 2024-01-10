# 使用的基础镜像
FROM python:3.10.0

# 设置工作目录
WORKDIR /app
# 复制requirements.txt
COPY requirements.txt requirements.txt

RUN pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple some-package

# 安装依赖包
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
# Flask异步库依赖单独安装
RUN pip install 'flask[async]' -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
# 复制当前目录下的内容到docker中
COPY . .
EXPOSE 80

# 把工作目录中SimHei.ttf 的移动到/usr/local/lib/python3.9/site-packages
RUN mkdir -p /usr/local/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf
RUN cp /app/SimHei.ttf /usr/local/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf

RUN pip uninstall urllib3 -y
RUN pip install --upgrade urllib3

# 启动命令
#ENTRYPOINT ["python", "app.py"]
ENTRYPOINT ["gunicorn", "-c", "config.py", "app:app"]
