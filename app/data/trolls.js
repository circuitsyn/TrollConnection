
// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var trollArray = [
    {
        "name":"Donald Troll",
        "photo":"https://2.bp.blogspot.com/-9eSNjzIHDVc/WiEqIpvJytI/AAAAAAAAHSA/a6qYpzjCJm45W43v96uT_f5sqG7GShguQCEwYBhgL/s640/daddylom-profile_image-747eabd7b82d5060-300x300.jpeg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Narzath The Great",
        "photo":"https://i.pinimg.com/originals/f0/ff/12/f0ff12c956f644fde9bfc0901f46d59b.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Trarnac The Powerful",
        "photo":"http://fc01.deviantart.net/fs17/i/2007/177/4/4/Huge_Orc_by_Ilacha.jpg",
        "scores":[
            1,
            1,
            5,
            5,
            5,
            1,
            3,
            1,
            5,
            1
          ]
      },
      {
        "name": "Trenrock the Meager",
        "photo": "https://pbs.twimg.com/profile_images/2418078489/h2kpe8vpnxj4kfnxctc1_400x400.gif",
        "scores": [
        "5",
        "4",
        "1",
        "1",
        "5",
        "2",
        "3",
        "2",
        "5",
        "5"
        ]
        },
    {
        "name": "Fanklina the Artist",
        "photo": "https://i.pinimg.com/236x/cf/f4/8d/cff48d1587690d8ba721110637475250--geek-art-mists.jpg",
        "scores": [
        "1",
        "3",
        "4",
        "2",
        "2",
        "3",
        "5",
        "5",
        "5",
        "1"
        ]
        },
    {
        "name": "Trenlock the Destroyer",
        "photo": "https://theoriestheses.files.wordpress.com/2017/04/b9a091b4e5beafa4c5a109e0445f6baa.jpg",
        "scores": [
        "1",
        "1",
        "5",
        "5",
        "5",
        "5",
        "1",
        "1",
        "5",
        "1"
        ]
        }

  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = trollArray;