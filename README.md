# Makeathon_Hansea.ai

## View our Front-End:
https://makeathon-hansea-ai.vercel.app/


---


## Steps to set up and run the code
To make the code work, please consider the following:

1. Use a virtual environment of your choice, and install all requirements listed in requirements.txt.

2. All important parameters are stored in .env-config. Please adjust accordingly.

3. you need to set up a .env-secrets manually. Please use the .env-secrets-sample for reference.

4. Call all scripts from the base folder.





---

### Project structure
The folder 'src' holds the python code to compute the results. The results of each step are stored - namely detection, tracking, and counting-
are stored under 'data'. This modular approach allows us to iterate faster, and and to parallelize our work.

The numbers indicate the sequence of steps taken to compute the final result, starting from 00. 

```


├── README.md
├── data
│   ├── 00_video_material
│   │   └── 1600_1615_10fps.mp4
│   ├── 01_detection
│   │   └── yolov7-e6e-1600_1615_10fps.csv
│   ├── 02_tracking
│   ├── 03_counting
│   └── 10_models
│       └── yolov7-e6e.pt
├── src
│   ├── 01_detect
│   │   ├── comparing_results.ipynb
│   │   ├── detect.py
│   │   └── test.py
│   ├── 02_tracking
│   ├── 03_counting
│   └── utils
│       └── upoad_to_cos.py
├── requirements.txt
└── venv
```    

## Working setup during MVP

Code and files in this project are produced locally and will then be pushed to GitHub "". The code is executed on a Virtual Machine using a GPU. To access and start the VM, navigate to the directory in which the ssh key is stored and execute the command "ssh -i ssh-key-gpu_rsa.prv root@IP". On the VM code is only executed and not generate, only use "git pull origin main" using the access token provided within this project when working with the VM and don't push code from within the VM. To execute code, first start the virtual environment using "source .venv/bin/activate".
To copy the files from the VM to a local machine, scp commands can be used: "scp -i ssh-key-gpu_rsa.prv root@IP:/root/ ." To upload data to the VM use "scp /Users/file root@IP:~/".
