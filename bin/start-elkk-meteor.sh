#! /bin/bash

DEBUG=0
MYSELF=`basename $0`

# --- METEOR ---

ELKKWEB_ROOT=${ELKKWEB_ROOT:-"/var/data/eldoret-kids/website"}

ELKKWEB_UPLOAD_DIR=${ELKKWEB_UPLOAD_DIR:-"$ELKKWEB_ROOT/upload"}
ELKKWEB_UPLOAD_TEMP_DIR=${ELKKWB_UPLOAD_TEMP_DIR:-"$ELKKWEB_UPLOAD_DIR/tmp"}

ELKKWEB_BIN=$ELKKWEB_ROOT/bin

if [ -d $ELKKWEB_BIN ]
then
  PATH=$PATH:$ELKKWEB_BIN
  if [ $DEBUG -eq 1 ]
  then
    echo "$MYSELF: *** PATH now includes $ELKKWEB_BIN"
  fi
fi

PORT=${PORT:-3000}
#ROOT_URL=${ROOT_URL:-"http://212.71.192.178:$PORT"}
ROOT_URL=${ROOT_URL:-"http://212.71.192.178"}
MONGO_URL=${MONGO_URL:-"mongodb://localhost:27017/elkkweb"}
#MAIL_URL="smtp://eldoret-kids@t-online.de:dt720pa8@securesmtp.t-online.de:465"
MAIL_URL="smtp://localhost:25"

export MONGO_URL MAIL_URL
export ELKKWEB_UPLOAD_DIR
export ELKKWEB_UPLOAD_TEMP_DIR

CMD="MAIL_URL=$MAIL_URL ROOT_URL=$ROOT_URL PORT=$PORT MONGO_URL=$MONGO_URL ELKKWEB_UPLOAD_DIR=$ELKKWEB_UPLOAD_DIR ELKKWEB_UPLOAD_TEMP_DIR=$ELKKWEB_UPLOAD_TEMP_DIR node main.js"

OLD_PWD=`pwd`
cd $ELKKWEB_ROOT/bundle

if [ $DEBUG -eq 1 ]
then
  echo "$MYSELF: *** About to run \"$CMD\" - Press RETURN to continue !"
  read
fi

eval "$CMD"
RC=$?

cd $OLD_PWD
exit $RC

