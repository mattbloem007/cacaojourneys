import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const allToppings = [
  { name: "Nervous System Health", checked: false },
  { name: "Cleanse", checked: false },
  { name: "Light Activation", checked: false },
  { name: "Radiate Vitality", checked: false },
]


const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [toppings, setToppings] = useState(allToppings)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState({success: null})

 const updateCheckStatus = index => {
   setToppings(
     toppings.map((topping, currentIndex) =>
       currentIndex === index
         ? { ...topping, checked: !topping.checked }
         : topping
     )
   )
 }

 const handleName = (e) => {
   setName(e.target.value)
 }

 const handleEmail = (e) => {
   setEmail(e.target.value)
 }

 const handleMessage = (e) => {
   setMessage(e.target.value)
 }

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const sendEmail = () => {
    let checks = ""
    toppings.map(topping => {
      checks = checks + " " + topping.name + " " + topping.checked + " "
    })
    console.log("Checks", checks)
    var template_params = {
               "reply_to": email,
               "from_name": name,
               "to_name": 'mattb007@gmail.com',
               "message": "Message: " + message + "\nJourneys: " + checks,
            }

    var service_id = "service_ifs4l2e";
    var template_id = "template_hqpw4qn";
    var user_id = "user_E7hnIvNfEqvZm2avmHiqG";
    console.log("Message", message, email, name)
    try {
      emailjs.send(service_id, template_id, template_params, user_id)
    }
    catch(e) {
      console.log("ERROR", e)
    }

    setSuccess({ success: 'Thank you! Your email is sent successfully :)' });
    setTimeout(() => {
      setSuccess({ success: '' });
    }, 3000);
  }

  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Feeling the call?</strong> To book your attendance, please let me know which journeys
          tug at your heart strings. Be sure to check the social media links on the left to see some of the
          posts for the specific journeys. Kindly request

        <form action="javascript:void(0);">
          <div className="field" style={{display: "flex", flexWrap: "wrap"}}>
          {
            toppings.map((topping, index) => (
            <div>
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={topping.checked}
                onChange={() => updateCheckStatus(index)}
              />
              <label htmlFor={`checkbox-${index}`}>{topping.name}</label>
            </div>
          ))
          }
          </div>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => handleName(e)}/>
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => handleEmail(e)}/>
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
                onChange={(e) => handleMessage(e)}
              />
            </div>
          </div>
          <ul className="actions">
            <li>
            <div>
              <button
                className="button primary"
                onClick={sendEmail}
              >Send Message</button>
              <span >
                  {success.success}
              </span>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default ContactForm
