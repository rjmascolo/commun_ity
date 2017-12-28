
User.destroy_all
Community.destroy_all
Membership.destroy_all
Event.destroy_all
Task.destroy_all

james = User.create({first_name:"james", last_name: "graham", email: "james@email.com", password:"123"})
ryan = User.create({first_name:"ryan", last_name: "mascolo", email: "ryan@email.com", password:"123"})
shirley = User.create({first_name:"shirley", last_name: "lin", email: "shirley@email.com", password:"123"})
matteo = User.create({first_name:"matteo", last_name: "bruni", email: "matteo@email.com", password:"123"})

# bowling community

bowling = Community.create({name: "Bowling Club", description: "Every Thursday night, We go bowling"})

Membership.create({member_type: "manager", user: james, community: bowling})
Membership.create({member_type: "member", user: ryan, community: bowling})
Membership.create({member_type: "member", user: shirley, community: bowling})
Membership.create({member_type: "member", user: matteo, community: bowling})

go_bowling = Event.create({name: "Go Bowling", start_date: DateTime.new(2018,1,3,13,30), end_date: DateTime.new(2018,1,3,14,30), volunteer_num: 3, description: "We're all going bowling", community: bowling, image:"http://www.lincolnbowl.co.uk/wp-content/uploads/2016/02/bggg.jpg", location: "61 Wythe Ave, Brooklyn, NY 11249" })

Task.create({description: "go get all the bowling balls", event: go_bowling, user: shirley})
Task.create({description: "make sure that all the bowling balls are sparkling", event: go_bowling, user: ryan})
Task.create({description: "bring some adult beverages", event: go_bowling, user: ryan})

# book club

book_club = Community.create({name: "Book Club", description: "Every month, we read a new book and discuss while eating food and drinks"})

Membership.create({member_type: "manager", user: james, community: book_club})

january_book = Event.create({name: "January Meeting: Cat's Cradle", start_date: DateTime.new(2018,1,6,13,30), end_date: DateTime.new(2018,1,6,14,30), volunteer_num: 3, description: "This months book is Cat's Craddle by Kurt Vonnegut. We will also be having beer and wings.", community: book_club, image:"https://i.pinimg.com/originals/03/75/59/037559dbe8d7014ecfdb6140e9e14bbd.png", location: "927 Putnam Ave, Brooklyn, NY 11221" })

Task.create({description: "bring buffalo wings", event: january_book, user: shirley})
Task.create({description: "bring a 6 pack of Pale Ale", event: january_book, user: ryan})
Task.create({description: "bring a 6 pack of IPA", event: january_book, user: james})
