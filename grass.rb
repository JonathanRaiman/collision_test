require 'json'
require 'sinatra'
require 'hashie/mash'

def tiles()
  # Read in the JSON file to a new object named "data"
  data = JSON.parse(File.read('tiles.json'))
  
  # Return just the 'locations' attribute (n.b. this will fail if the JSON file
  # is empty or otherwise lacks a 'locations' attribute)
  return data['tiles']
end


# Add a new location to the places.json file

def add_location(kind, lat, long)
  # Read in the JSON file to a new object named "data"
  data = JSON.parse(File.read('tiles.json'))
  
  # Expect the JSON object, "data", to have a 'locations' attribute we can append to
  data['tiles'] << {"kind" => kind, "latitude" => latitude.to_i , "longitude" => longitude.to_i }
  
  # Open the JSON file in 'w' (overwrite) mode and write the new "data" back into JSON
  File.open('tiles.json', 'w') do |datafile|
    datafile.write(data.to_json)
  end
end


#get "/" do
#	@places = Hashie::Mash.new(JSON.parse(File.read("places.json")))["places"]
#	erb File.read "index.html.erb"
#end

get '/collision_map' do
  # Make the locations from the file available to the template
  @tiles = Hashie::Mash.new(JSON.parse(File.read("tiles.json")))["tiles"]
  
  # Use erb to show the index template from views/index.erb
  erb :index
end

post '/location' do
  # Take the "placename", "lat", and "long", "sizes" fields from the form in views/index.erb
  # (that come in as part of params) and pass them to the add_location function
  add_location(params[:kind], params[:latitude], params[:longitude])
  
  # Send the browser back to the main page, "/"
  redirect to("/collision_map")
end