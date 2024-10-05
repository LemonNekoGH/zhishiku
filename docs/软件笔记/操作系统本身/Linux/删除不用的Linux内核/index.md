# 删除不用的Linux内核
新建 .sh 文件

```Bash
#!/bin/bash
# Run this script without any param for a dry run
# Run the script with root and with exec param for removing old kernels after checking
# the list printed in the dry run

uname -a
IN_USE=$(uname -a | awk '{ print $3 }')
if [[ $IN_USE == *-generic ]]
then
  IN_USE=${IN_USE::-8}
fi
echo "Your in use kernel is $IN_USE"

OLD_KERNELS=$(
    dpkg --list |
        grep -v "$IN_USE" |
        grep -v "linux-headers-generic" |
        grep -v "linux-image-generic"  |
        grep -Ei 'linux-image|linux-headers|linux-modules' |
        awk '{ print $2 }'
)
echo "Old Kernels to be removed:"
echo "$OLD_KERNELS"

if [ "$1" == "exec" ]; then
    for PACKAGE in $OLD_KERNELS; do
        yes | apt purge "$PACKAGE"
    done
fi
```


执行

看查看到要删除的内核版本和相关的包，确认没有问题之后再运行

之后重启，执行：

检查现有的内核：
