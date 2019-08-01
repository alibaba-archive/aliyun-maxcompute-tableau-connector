#/usr/bin/env bash

if [ ! -e ~/Library/Tableau/Drivers/odps-jdbc-3.0.0-jar-with-dependencies.jar ];
then
  ln -s /Users/jon/tmp/tableau/aliyun-odps-jdbc/target/odps-jdbc-3.0.0-jar-with-dependencies.jar ~/Library/Tableau/Drivers/odps-jdbc-3.0.0-jar-with-dependencies.jar
fi


/Applications/Tableau\ Desktop\ 2019.2.app/Contents/MacOS/Tableau -DConnectPluginsPath=/Users/jon/github/connector-plugin-sdk/samples/plugins/ &
