# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Community.destroy_all
Membership.destroy_all
Event.destroy_all
Task.destroy_all

james = User.create({first_name:"james", last_name: "graham", email: "james@email.com", password:"123"})
ryan = User.create({first_name:"ryan", last_name: "mascolo", email: "ryan@email.com", password:"123"})
shirley = User.create({first_name:"shirley", last_name: "lin", email: "shirley@email.com", password:"123"})
matteo = User.create({first_name:"matteo", last_name: "bruni", email: "matteo@email.com", password:"123"})

bowling = Community.create({name: "bowling club", description: "We go bowling"})

Membership.create({member_type: "manager", user: james, community: bowling})
Membership.create({member_type: "member", user: ryan, community: bowling})
Membership.create({member_type: "member", user: shirley, community: bowling})
Membership.create({member_type: "member", user: matteo, community: bowling})

go_bowling = Event.create({name: "go bowling", date: Date.new, volunteer_num: 3, description: "We're all going bowling", community: bowling})

Task.create({name: "Get balls", description: "go get all the bowling balls", event: go_bowling})
Task.create({name: "shine bowling balls", description: "make sure that all the bowling balls are sparkling", event: go_bowling, user: ryan})
