import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main>
      <h2>How we came to be</h2>
      <p>Raymond Thompson is the Chairman of the Cloud 9 group of companies which produces family orientated television shows distributed to over 125 countries around the world. Both Raymond Thompson and his sons have been diagnosed with Asperger’s Syndrome. Raymond felt that New Zealand needed more readily available information and support for children with Asperger’s Syndrome and in October 2000 he established the Cloud 9 Children’s Foundation as a non-profit charitable trust.  As a successful film director Raymond feels he is a positive role model for children touched by Asperger’s syndrome.
      </p>

      <h2>What are we all about</h2>
      <p>We are a support organisation that works on both the national and regional level in New Zealand to help children and teenagers who have Asperger’s Syndrome. We also aim to assist those who help children with Asperger’s Syndrome such as the child’s family and carers, teachers and professionals. An important first step in helping children is increasing the awareness of the syndrome in New Zealand.  We run programs and activities aimed at lifting the profile of Asperger’s Syndrome in the community, as well as assisting children in their daily social interaction with others.</p>

      <h2>Wellington Coffee Mornings</h2>
      <p>A great get-together for parents who can’t make it to the evening meetings and for those who would prefer to attend a social while the kids are at school. Coffee mornings provide an opportunity to chat to people who understand what it means to bring up a child with Asperger’s syndrome. Speaking ‘the same language’ allows parents to swap ideas and anecdotes and assist each other with useful tips and guidance. Relaxing with people who understand is a great stress reliever. Dates of future sessions are advised to members electronically.  Sessions last approximately two hours and start around 10.00am. There is no charge.</p>

      <h2>What else we have on offer...</h2>
      <p>Being a relatively small support group, we like to work in conjunction with like-minded organisations and we’re always willing to share our knowledge and programme structures with other groups.</p>
      <p>Below is a list of sample activies and programmes at each of our levels:</p>
      <ul>
        <li>Support by email.</li>
        <li>Informative and interactive website.</li>
        <li>An information leaflet on aspects of Asperger's Syndrome.</li>
        <li>Coffee morning meetings.</li>
        <li>Information evenings.</li>
        <li>Saturday Clubs (1st Saturday of every month) – Teen Club (from 13 up) from 2pm to 4pm and the Pre-Teen Group (age 9-13) from 11.30am to 1pm. There is no charge, you don’t need to make a booking and Serena and her volunteers are always around.</li>
        <li>Social skills courses.</li>
        <li>Fortnightly Minecraft sessions - see <Link to="#">here</Link></li>
      </ul>

      <h2>How you can find out more</h2>
      <p>Join the Foundation on-line – it’s free.  For more information or to join up please click the <Link to="/contact">Contact Us</Link> tab above.</p>

      <h2>Join the foundation</h2>
      <p>To receive information on events, seminars and courses in your area, let us have your details by clicking on: <Link to="http://eepurl.com/b2kwYL">join the Foundation online</Link> – take the first step!</p>
      <p>If you’re on Facebook, you can apply to join the <Link to="http://www.facebook.com/groups/14870253794/">Cloud 9 Children’s Foundation group</Link>.  Share your comments, photographs and experiences with others on Facebook.</p>

      <h2>Donations to the foundation</h2>
      <p>Next time you feel like making a donation to your favourite charity, remember the Foundation is a registered charity too.  You’ll receive a receipt for your donation, which you can submit to IRD for a rebate.</p>
      <p>Donations may be made by credit card through the safe Paypal option, posting us a cheque or by depositing money directly into our Westpac bank account:</p>
      <h4>Branch: North End</h4>
      <p>Account Number: 03-0539-0220090-00</p>
      <p>Account holder: Cloud 9 Children’s Foundation</p>

      <h2>Sponsors</h2>
      <p>Without our sponsors and donations from the public, the Foundation wouldn’t exist.  We are very much indebted to the organisations listed below, without whose generosity we wouldn’t be able to continue keeping the dream alive.</p>
      <img src="https://withyoueverystepoftheway.files.wordpress.com/2011/01/nz-lotery-grants-board1.jpg" alt="Sponsor Image, NZ Lottery Grants Board" />
      <img src="https://withyoueverystepoftheway.files.wordpress.com/2011/01/te-wananga-o-aotearoa1.jpg" alt="Sponsor Image, Te Wananga o Aotearoa" />
      <img src="https://withyoueverystepoftheway.files.wordpress.com/2011/01/z_petrol_station_logo.jpg?w=176&h=137" alt="Sponsor Image, Z" />
    </main>
  )
}

export default About
