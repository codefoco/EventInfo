function getEventInfo (response, info_going, info_interested)
{
    getEventInfoAttending (response, info_going);
    getEventInfoInterested (response, info_interested);
}

function getEventInfoAttending (response, info_going)
{
    if (!response || !response.attending || !response.attending.data.length)
        return;

    getEventInfoFromParticipants (response.attending.data, info_going);
}

function getEventInfoInterested (response, info_interested)
{
    if (!response || !response.interested || !response.interested.data.length)
        return;

    getEventInfoFromParticipants (response.interested.data, info_interested);
}

function getEventInfoFromParticipants (participants, info)
{
    for (var i = 0; i < participants.length; i++) 
    {
        var participant = participants[i];
        var result =  getNameInfo(participant.name);
        if (!result)
            continue;

        if (result.gender == 'female') {
            if (result.ethnics == 'asian')
                 info.asian_female_count ++;
            else
                 info.non_asian_female_count ++;
        } else {
             if (result.ethnics == 'asian')
                 info.asian_male_count ++;
            else
                 info.non_asian_male_count ++;
        }
    }
}

