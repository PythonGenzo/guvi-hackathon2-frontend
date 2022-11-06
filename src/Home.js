import { Button } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Home() {

  return (
    <div className="home-container">

      <div className="first-content">
        <img className="home-image"
        alt={"RentImage"} 
        src={"https://thebanzai.com/img/rentals/cameraBanner.jpg"}/>
         <p className="home-text">Rental of Professional Video, Audio and Lighting Equipment in Equipment Rental</p>
       </div>

       {/* <div className="home-image">
        <div>
        <img  className="home-image" alt={"webImage"} src={"https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4="} />
        <img  className="home-image" alt={"webImage"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTnc4YXxAxRsT00WJd7Bx6NB-prlnM8e6KAye587g0ifgPLfKafRHHBqW9CiIfr4BUqU&usqp=CAU"} />
        <img  className="home-image" alt={"webImage"} src={"https://cdn.shopify.com/s/files/1/1034/1611/products/1502721400000_1334357_1024x.jpg?v=1576002877"} />
        </div>
       </div> */}

       <div className="second-content">
        <h1>DO YOU HAVE A QUESTION?</h1>
        <p className="logo"><WhatsAppIcon/>Whatsapp 00000 00000</p>
        <p className="logo"><LocalPhoneIcon/>Phone 0000 000 0000</p>
        <Button>Rental Enquiry</Button>
       </div>

       <div className="home-footer">
          <p>San Entertainment, Production House.</p>
          <p>Whatsapp 000000000  -  Phone 0000 000 000 </p>
          <p>inf0@san.com</p>
          <p>Copyright © 2022 - All rights reserved</p>
          <p>Privacy</p>
      </div>
    </div>
  );
}