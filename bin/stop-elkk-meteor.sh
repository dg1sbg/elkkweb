#! /bin/bash

DEBUG=0
MYSELF=`basename $0`

# --- METEOR ---

ELKKWEB_ROOT=/var/data/eldoret-kids/website

ELKKWEB_BIN=$ELKKWEB_ROOT/bin

if [ -d $ELKKWEB_BIN ]
then
  PATH=$PATH:$ELLKKWEB_BIN
  if [ $DEBUG -eq 1 ]
  then
    echo "$MYSELF: *** PATH now includes $ELKKWEB_BIN"
  fi
fi

PID=`ps -ax | grep "node main.js" | grep -v grep | awk '{ print $1 }' -`
CMD="kill $PID 2>/dev/null; sleep 2; kill -9 $PID 2>/dev/null"

if [ $DEBUG -eq 1 ]
then
  echo "$MYSELF: *** About to kill process $PID - Press RETURN to continue !"
  read
fi

eval "$CMD"
RC=$?
exit $RC

