# MaxCompute Tableau Connector

[MaxCompute](https://www.alibabacloud.com/product/maxcompute) (previously known as ODPS) is a general purpose, fully managed, multi-tenancy data processing platform for large-scale data warehousing.

This connector allows users to use MaxCompute as datasource in Tableau.

This connector is developed under the [Tableau official guidance](https://tableau.github.io/connector-plugin-sdk/) and [TDVT](https://tableau.github.io/connector-plugin-sdk/docs/tdvt) passed.

## Setup

1. Install TDVT: `python3 -m pip install tdvt-1.5.14.tar.gz`
1. Setup MaxCompute project and prepare tables for TDVT(check `dataset/maxcompute/*.sql`), run `setproject.sql` as project owner and the output of `setproject;` should contains
```
odps.sql.validate.orderby.limit=false
odps.sql.decimal.odps2=true
odps.sql.type.system.odps2=true
odps.sql.timezone=UTC
```
1. Update config/odps_config.ini, set 'CommandLineOverride' to be the path to unzipped 'plugin' directory
1. Update config/odps_config.ini, set 'tablePrefix' to be your maxcompute project name
1. Edit config/tdvt/tdvt.ini and set the path to tabquerytool
1. Move MaxCompute jdbc driver (`lib/odps-jdbc-*.jar`) to the tableau driver directory (eg. `~/Library/Tableau/Drivers` on MacOS)
1. Setup dataset, see dataset directory and TDVT guidance for detail
1. Follow the TDVT guidance to run tests

### Tips
1. The log of jdbc is in the same directory of jdbc driver
1. To generate tds file, `scripts/start.sh` provides an example to start Tableau desktop with MaxCompute connector. You need to modify the path to make the script run correctly.

## LICENSE

The connector is open sourced under the MIT License.

## About MaxCompute

MaxCompute provides command line tool named `odpscmd` as an interactive shell, which is also [open-sourced](https://github.com/aliyun/aliyun-odps-console).

Here's some hints about how to setup and use `odpscmd`:
1. Download odpscmd package and finish all necessary configuration refer to [official document](https://www.alibabacloud.com/help/doc-detail/27804.html)
1. each command has to be ended with a ';'
1. view the metadata of a table with 'desc' command (like 'desc calcs;')
1. execute SQL statements generated by TDVT directly (like 'SELECT * FROM TBL LIMIT 50;')
1. use 'help;' command for more advanced commands