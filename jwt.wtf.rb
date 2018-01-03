require 'jwt';

token = JWT.encode({name: 'Joel', hobbies: ['Music', 'Coding']}, 'fluffybunny')
puts token

output = JWT.decode(token, 'fluffybunny')
p output