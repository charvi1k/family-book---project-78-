var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","file:///Users/charvireddy/Downloads/IMG_1518%20(2).HEIC", "file:///Users/charvireddy/Downloads/IMG_EA29F82CECB4-1.jpeg" , "file:///Users/charvireddy/Desktop/Charvi's%20folder%20/Whitehat%20jr%20text-based%20projects/Visual%20Studio/Project%2078/IMG_4943.PNG", "file:///Users/charvireddy/Desktop/Charvi's%20folder%20/Whitehat%20jr%20text-based%20projects/Visual%20Studio/Project%2078/96DA8C40-3896-4FAA-B497-9D7A54674DFF.JPG", "file:///Users/charvireddy/Desktop/Charvi's%20folder%20/Whitehat%20jr%20text-based%20projects/Visual%20Studio/Project%2078/IMG_084BABC1F1B8-1.jpeg"];
var names = ["Fmaily Book","Jagdish reddy", "Pavani reddy", "Kritin reddy", "Charvi reddy", "Family picture"];
var i = 0;
function change_pic()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
