
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

  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = trollArray;