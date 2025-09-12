module.exports = {
  apps: [{
    script: 'npm start',
  }],

  deploy: {
    production: {
      key: 'Agric.pem',
      user: 'ubuntu',
      host: 'agric',
      ref: 'origin/main',
      repo: 'git@github.com:IDCLofficial/ministry-of-special-duties.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=g08mvfhb24ji && export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o && export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw && export NEXT_PUBLIC_MINISTRY_ID=3AVAM45hTT76Kk9Yb5vyUh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
