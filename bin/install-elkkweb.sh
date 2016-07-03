cd /var/data/eldoret-kids/website
bin/rc.elkk_meteor stop

rm -rf elkkweb.tar.old
if [ -f elkkweb.tar ]
then
  mv elkkweb.tar elkkweb.tar.old 2>/dev/null
fi
if [ -f /tmp/elkkweb.tar.gz ] 
then
  if [ -f elkkweb.tar.gz ]
  then
     rm elkkweb.tar.gz
  fi
  cp /tmp/elkkweb.tar.gz .
fi

rm -rf bundle.old 2>/dev/null
if [ -f bundle.save ]
then
  mv bundle.save bundle.old
fi
rm -rf bundle.save 2>/dev/null
mv bundle bundle.save

#rm -rf cfs.old 2>/dev/null
#mv cfs.save cfs.old
#mv cfs cfs.save

gunzip elkkweb.tar.gz

tar xf elkkweb.tar

PWD=`pwd`
bin/reinstall-bcyrpt
cd bundle/programs/server/npm
npm install
cd $PWD
