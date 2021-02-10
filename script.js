document.addEventListener('DOMContentLoaded', () => {
    var friends_Name = ['Zedrik', 'George', 'Randall', 'Chris', 'Justin'];
    var locations_Name = ['bathroom', 'basement', 'patio', 'bedroom', 'living room', 'dining room', 'pool', 'shed', 'study', 'greenhouse'];
    var weapon_Name = ['Hadou 90', 'shuriken', 'destructo disc', 'power stone', 'Leprechaun in the Hood', 'ending of Green Mile', 'a drone strike', 'Donald Trump\'s toupee', 'buster sword', 'Omega Weapon', 'stinky tofu', 'dragon', 'One Ring', 'Warhammer', 'bag of rice', 'albino ferret', 'deer antler', 'Elder Wand', 'Colossal Titan', 'World Snake']

    for (i = 1; i < 101; i++) {
        var h3Element = document.createElement('h3');
        var h3Text = document.createTextNode('Accusation ' + i);

        h3Element.appendChild(h3Text);
        document.body.appendChild(h3Element);

        (() => {
            var accusationNumber = i;
            var friendModulus = accusationNumber % 10;
            var friend_Name = friends_Name[friendModulus]


            h3Element.addEventListener('click', function () {
                var cycleFriends = (accusationNumber % 10) - 5;
                var friendName_2 = friends_Name[cycleFriends];
                var weapon_Index = (Math.floor(Math.random() * 20))
                var room_Index = (Math.floor(Math.random() * 10))
                var weapon_Choice = weapon_Name[weapon_Index]
                var death_Room = locations_Name[room_Index]

                if (friend_Name == undefined) {
                    alert('Accusation: ' + accusationNumber + '  I accuse ' + friendName_2 + ', with the ' + weapon_Choice + ' in the ' + death_Room + '.');
                } else {
                    alert('Accusation: ' + accusationNumber + ' I accuse ' + friend_Name + ', with the ' + weapon_Choice + ' in the ' + death_Room + '.');

                }
            }

            )

        })();




    };






})

























