#!/bin/bash
if curl -I "https://www.robertasoliman.tech" 2>&1 | grep -w "200\|301" ; then
    echo "robertasoliman.tech is up"
else
    echo "robertasoliman.tech is down"
fi