# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding users"

User.create(name: "John Smith", password: "1234567", username: "john")
User.create(name: "Mary Kim", password: "1111111", username: "mary")
User.create(name: "John Doe", password: "222222", username: "johndoe")

puts "✅ Done seeding!"