#!/bin/bash
FROM_BRANCH="dev"
TO_BRANCH=$1

echo "Merging $FROM_BRANCH to $TO_BRANCH"

phrase pull --branch $FROM_BRANCH
if [[ $TO_BRANCH == master ]]
then
    phrase push
else
    phrase push --branch $TO_BRANCH
fi
