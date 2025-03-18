const bloodGroups = ["B+", "O+", "O-", "AB+", "AB-"]

let found = false
for(let k=0; k<bloodGroups.length; k++)
{
    if(bloodGroups[k]== "B+")
    {
        found = true
        break;
    }
}

if(found)
    console.log("Blood group found")
else
    console.log("Blood group not found")



function FindBloodGroup(bloodgroups)
{
    let found = false
    for(let k=0; k<bloodgroups.length; k++)
        {
            if(bloodGroups[k]== "B+")
            {
                found = true
                break;
            }
        }
    bloodGroups = [...bloodGroups].sort()
    return found
}

if(FindBloodGroup(bloodGroups))
{
    console.log("Blood Group found")
}
else
    console.log("Blood group not found")