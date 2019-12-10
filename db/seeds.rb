10.times do 
  Department.create(
    name: Faker::Commerce.department
  )
end

puts "10 created"