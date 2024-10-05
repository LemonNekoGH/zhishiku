# 解决OMV磁盘丢失无法删除的问题
找到并备份配置文件：

```Bash
sudo cp /etc/openmediavault/config.xml /etc/openmediavault/config.xml.backup
```


编辑配置文件：

```Bash
sudo nano /etc/openmediavault/config.xml
```


应用配置文件:

```Bash
sudo omv-salt deploy run fstab
```


删除共享文件夹与硬盘

```XML
  <mntent>
        <uuid>fe036ffa-e9ea-43f6-a315-dda92cb57454</uuid>
        <fsname>/dev/disk/by-uuid/55718241-bccb-43db-abc4-37ab97c97de4</fsname>
        <dir>/srv/dev-disk-by-uuid-55718241-bccb-43db-abc4-37ab97c97de4</dir>
        <type>btrfs</type>
        <opts>defaults,nofail</opts>
        <freq>0</freq>
        <passno>2</passno>
        <hidden>0</hidden>
        <usagewarnthreshold>85</usagewarnthreshold>
        <comment/>
  </mntent>
```


```Ini
<sharedfolder>
        <uuid>531eb649-1c1f-4403-8f02-b5d3eb0a35cc</uuid>
        <name>共享存储</name>
        <comment/>
        <mntentref>fe036ffa-e9ea-43f6-a315-dda92cb57454</mntentref>
        <reldirpath>shared_storage/</reldirpath>
        <privileges>
          <privilege>
            <type>user</type>
            <name>Neko</name>
            <perms>7</perms>
          </privilege>
        </privileges>
 </sharedfolder>
```



