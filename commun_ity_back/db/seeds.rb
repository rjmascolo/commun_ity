require 'faker'

def createFakeCommunityData(community, event)

  list = []
  20.times {|i| list.push("ssd")}
  newlist = list.map{ |x| User.create({first_name:Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password:"123", profile_pic:Faker::Avatar.image}) }
  newlist.each{|user| Membership.create({member_type: "member", user: user, community: community})}
  newlist.slice(0,10).each{ |user| Task.create({description: "RSVP", event: event , user: user}) }

end

User.destroy_all
Community.destroy_all
Membership.destroy_all
Event.destroy_all
Task.destroy_all

james = User.create({first_name:"James", last_name: "Graham", email: "james@email.com", password:"123", profile_pic:"https://files.slack.com/files-pri/T02MD9XTF-F7EV851RP/cropped_pro_pic.jpeg"})
ryan = User.create({first_name:"Ryan", last_name: "Mascolo", email: "ryan@email.com", password:"123", profile_pic:"http://www.campustechnicalsupport.com/img/dude.jpg"})
shirley = User.create({first_name:"Shirley", last_name: "Lin", email: "shirley@email.com", password:"123", profile_pic:"https://www.projectu.tv/wp-content/uploads/2015/06/shutterstock_81301759.jpg"})
matteo = User.create({first_name:"Matteo", last_name: "Bruni", email: "matteo@email.com", password:"123", profile_pic:"http://www.campustechnicalsupport.com/img/dude.jpg"})

# Bowling Community Data
bowling = Community.create({name: "Bowling Club", description: "Every Thursday night, We go bowling", location: "New York, NY", image_url: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_3x2/public/587698547.png?itok=zhCwb331&resize=1100x740"})

go_bowling = Event.create({name: "Thursday Night Bowling League", start_date: DateTime.new(2018,1,3,13,30), end_date: DateTime.new(2018,1,3,14,30), volunteer_num: 3,
description: "Let's get together and bowl at Lucky Strike, West Nyack! I will reserve the lanes, and I have a few tasks I need help with. Please sign up for some of them below! Happy hour is until 7 so
there will be drink specials available! There are also other activities available like billiards, ping pong and an arcade!!", community: bowling, image:"http://www.lincolnbowl.co.uk/wp-content/uploads/2016/02/bggg.jpg", location: "61 Wythe Ave, Brooklyn, NY 11249" })

Membership.create({member_type: "manager", user: james, community: bowling})
Membership.create({member_type: "manager", user: ryan, community: bowling})
Membership.create({member_type: "member", user: shirley, community: bowling})
Membership.create({member_type: "member", user: matteo, community: bowling})

Task.create({description: "Pick up all of the bowling balls from the back of the bowling alley", event: go_bowling, user: shirley})
Task.create({description: "Clean all of the bowling balls after the event", event: go_bowling, user: ryan})
Task.create({description: "Bring extra bowling shoes for any newcomers", event: go_bowling, user: ryan})
Task.create({description: "Bring a variety of chips and dip", event: go_bowling, user: matteo})

createFakeCommunityData(bowling, go_bowling)

# book club

book_club = Community.create({name: "Book Club", description: "Every month, we read a new book and discuss while eating food and drinks", location: "Brooklyn, NY", image_url: "http://www.wblibrary.org/BookClub.png/@@images/image.png"})

Membership.create({member_type: "manager", user: ryan, community: book_club})

january_book = Event.create({name: "January Meeting: Cat's Cradle", start_date: DateTime.new(2018,1,6,13,30), end_date: DateTime.new(2018,1,6,14,30), volunteer_num: 3, description: "This months book is Cat's Craddle by Kurt Vonnegut. We will also be having beer and wings.", community: book_club, image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/CatsCradle%281963%29.jpg/220px-CatsCradle%281963%29.jpg", location: "927 Putnam Ave, Brooklyn, NY 11221" })


Task.create({description: "Bring buffalo wings", event: january_book, user: shirley})
Task.create({description: "Bring a 6 pack of Pale Ale", event: january_book, user: ryan})
Task.create({description: "Bring a 6 pack of IPA", event: january_book, user: james})

createFakeCommunityData(book_club, january_book)

react_community = Community.create({name: "React JS", description: "Every week, we meet up to go over any problems we have been having with React and help each other out.", location: "Brooklyn, NY", image_url: "https://reactjs.org/logo-og.png"})

communities = [
  ["Weekly Chess Club", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg"],
  ["Stand Up Comedy Workshop", "http://mediad.publicbroadcasting.net/p/kmuw/files/styles/x_large/public/201703/stand-up-comedy.jpg"],
  ["Gardening Tips and Tricks", "http://www.frador.com/wp-content/uploads/2015/04/gardening_in_mn.jpg"],
  ["Digital Marketers", "https://framinglifeproductions.com/wp-content/uploads/2017/02/Digital-Marketing.jpg"],
  ["Photoshop Experts", "https://i.ytimg.com/vi/USi_ShbcM6o/maxresdefault.jpg"],
  ["Film Buffs", "http://ic.pics.livejournal.com/sportstrainer01/76731246/2548/2548_900.jpg"],
  ["Artists In Tech", "https://media2.s-nbcnews.com/j/msnbc/components/video/201701/f_high_tech_tat_170103.nbcnews-ux-1080-600.jpg" ],
  ["ArtForward", 'https://benton.uconn.edu/wp-content/uploads/sites/1519/2017/06/Akshara-Thejaswi_The-Daily-Campus.jpeg'],
  ["Improv Hangout", "http://breweryarts.org/wp-content/uploads/2017/01/improv.jpg"],
  ["Writer's Group", "http://wwwcdn.scriptmag.com/wp-content/uploads/writers-group1.jpg"]
]

communities.each{ |community|
  commun = Community.create({name: community[0], description: Faker::Hipster.paragraph, location: "New York, Ny", image_url: community[1]})
  event = Event.create({
    name: "January Meetup",
    start_date: DateTime.new(2018,2,6,13,30),
    end_date: DateTime.new(2018,2,6,14,30),
    volunteer_num: 3,
    description: Faker::Hipster.paragraph,
    community: commun ,
    image:community[1],
    location: "#{Faker::Address.street_address}, Brooklyn, NY" })
    createFakeCommunityData(commun, event)
 }
