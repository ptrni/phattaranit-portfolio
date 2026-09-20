import "./App.css"
import profile from "./assets/pic.jpg"


function App(){

return(

<div>


<nav>

<h2>
Portfolio
</h2>


<div>

<a href="#about">
เกี่ยวกับฉัน
</a>


<a href="#skills">
ทักษะ
</a>


<a href="#projects">
ผลงาน
</a>





</div>

</nav>


<section className="hero">

<img 
src={profile}
alt="profile"
/>


<div>

<h1>
ภัทรนิษฐ์ อินสว่าง
</h1>


<h2>
(ไอซ์)
</h2>


<p>
นักศึกษาชั้นปีที่ 4
สาขาวิทยาการคอมพิวเตอร์
มหาวิทยาลัยเกษตรศาสตร์
</p>

<button>
Download CV
</button>


</div>

</section>

<section 
id="about"
className="about"
>

<h2>
About Me
</h2>

<p>
นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ มีความสนใจด้านการพัฒนาซอฟต์แวร์ การพัฒนาเว็บไซต์ และเทคโนโลยีด้าน AI มีประสบการณ์จากการทำโครงงานด้านการเขียนโปรแกรม การวิเคราะห์และออกแบบระบบ รวมถึงการจัดการฐานข้อมูล
มีความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะด้านเทคนิค เพื่อนำความรู้ไปประยุกต์ใช้กับการพัฒนาโครงการจริง และพร้อมทำงานร่วมกับทีมพัฒนาอย่างมีประสิทธิภาพ
พร้อมสำหรับการฝึกงานสหกิจศึกษา 4 เดือน ตั้งแต่วันที่ 23 พฤศจิกายน 2569 ถึง 19 มีนาคม 2570
</p>

</section>

<section 
id="skills"
className="skills"
>

<h2>
ทักษะ
</h2>


<div className="skill-container">


<div className="skill-card">

<h3>
Programming Languages
</h3>

<p>
Java
</p>

<p>
JavaScript
</p>

<p>
Python
</p>

<p>
C
</p>

</div>



<div className="skill-card">

<h3>
Web & Database
</h3>

<p>
HTML
</p>

<p>
CSS
</p>

<p>
Node.js
</p>

<p>
MySQL
</p>

</div>



<div className="skill-card">

<h3>
Tools & Design
</h3>

<p>
Figma
</p>

<p>
GitHub
</p>

<p>
Visual Studio Code
</p>

<p>
Eclipse
</p>

</div>



<div className="skill-card">

<h3>
Soft Skills
</h3>

<p>
Teamwork
</p>

<p>
Problem-solving
</p>

<p>
Adaptability
</p>

<p>
Self-motivated
</p>

<p>
Critical Thinking
</p>

</div>


</div>
<section 
id="projects"
className="projects"
>

<h2>
โครงงานและผลงาน
</h2>


<div className="project-container">


{/* Project 1 */}

<div className="project-card">

<h3>
ระบบแนะนำสถานที่ออกกำลังกายที่เหมาะสมตามคุณภาพอากาศ
</h3>

<h4>
ปี 2026 | กำลังพัฒนา (In Progress)
</h4>

<p>
ระบบแนะนำสถานที่ออกกำลังกายโดยวิเคราะห์ข้อมูลคุณภาพอากาศ
เช่น PM2.5, AQI และสภาพอากาศ
เพื่อช่วยให้ผู้ใช้งานสามารถเลือกสถานที่ออกกำลังกาย
ที่เหมาะสมกับสภาพแวดล้อม
</p>

<p>
<b>พัฒนาด้วย:</b>
<br/>
Python | Machine Learning | API
</p>


<a 
href="ใส่ GitHub Link"
target="_blank"
>

<button>
GitHub
</button>

</a>


</div>




{/* Project 2 */}

<div className="project-card">

<h3>
SmartBin ระบบถังขยะอัจฉริยะ
</h3>

<h4>
ปี 2025 | สำเร็จแล้ว (Completed)
</h4>

<p>
ระบบถังขยะอัจฉริยะสำหรับช่วยเพิ่มประสิทธิภาพ
ในการจัดการขยะ โดยใช้เทคโนโลยีเพื่อช่วยตรวจสอบ
และจัดการข้อมูลของระบบ
</p>

<p>
<b>พัฒนาด้วย:</b>
<br/>
Python | Figma
</p>


<a 
href="https://paracetalom.github.io/smart_bin_final/?fbclid=PAVERFWAUcyQVwZG9mAmZkaWQWUOzBvhDHwhtJrrD6uLc6qxCdvizgB2V4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp_NOSCdY98-co2yawwvs8ZHBfLpAwZrusG4LdPIGyTegMv5aLXqXKW6VZEl0_aem_RY9sP1eQJQ4J--h5YhORcA"
target="_blank"
>

<button>
view Project
</button>

</a>


</div>




{/* Project 3 */}

<div className="project-card">

<h3>
ระบบสารสนเทศร้านเช่าอุปกรณ์สำหรับจัดเลี้ยง
</h3>

<h4>
ปี 2025 | สำเร็จแล้ว (Completed)
</h4>

<p>
ระบบสารสนเทศสำหรับบริหารจัดการร้านเช่าอุปกรณ์
สำหรับจัดเลี้ยง ประกอบด้วยการจัดการข้อมูลสินค้า
ข้อมูลการเช่า และข้อมูลที่เกี่ยวข้อง
</p>

<p>
<b>พัฒนาด้วย: </b>
MySQL | Figma
</p>

<a 
href="https://drive.google.com/file/d/1CDxO6FNAGQDgYcMfKjkOH2GF3_-EfuAG/view?usp=sharing"
target="_blank"
>

<button>
View Report
</button>

</a>

</div>


{/* Project 4 */}

<div className="project-card">

<h3>
ระบบตรวจจับทางม้าลาย
</h3>

<h4>
ปี 2024 | สำเร็จแล้ว (Completed)
</h4>

<p>
ระบบประมวลผลภาพสำหรับตรวจจับทางม้าลาย
เพื่อวิเคราะห์ข้อมูลจากภาพและช่วยในการตรวจจับ
พื้นที่ทางม้าลาย
</p>

<p>
<b>พัฒนาด้วย:</b>
<br/>
MATLAB
</p>


<a 
href="https://drive.google.com/file/d/1rm_44F7v_XmKhNvqKiZ568GnzdAVqXNG/view?usp=sharing"
target="_blank"
>

<button>
View Report
</button>

</a>


</div>




{/* Project 5 */}

<div className="project-card">

<h3>
โปรแกรมวางแผนหน่วยกิตการเรียน
ของสาขาวิทยาการคอมพิวเตอร์
หลักสูตรปี 2565
</h3>

<h4>
2024 | Completed
</h4>

<p>
โปรแกรมช่วยวางแผนและตรวจสอบหน่วยกิต
ตามโครงสร้างหลักสูตร เพื่อช่วยให้นักศึกษาวางแผนการเรียน
</p>

<p>
Java
</p>

<a 
href="https://github.com/ptrni/Credit-Planning-System"
target="_blank"
>

<button>
View Project
</button>

</a>

</div>


</div>

</section>
<section className="activities">

<h2>
กิจกรรมและการอบรม
</h2>


<div className="activity-container">


<div className="activity-card">

<h3>
อบรม Cyber Security
</h3>

<p>
เข้าร่วมการอบรมเกี่ยวกับความมั่นคงปลอดภัยทางไซเบอร์
เพื่อเรียนรู้แนวคิดพื้นฐานด้านการป้องกันภัยคุกคาม
และการรักษาความปลอดภัยของข้อมูล
</p>

<p>
วิทยากร: คุณณัฐพงษ์ ฟองสินธุ์
</p>

</div>



<div className="activity-card">

<h3>
อบรมทักษะด้านคอมพิวเตอร์
เทคโนโลยีสารสนเทศ การเงินและการธนาคาร
</h3>

<p>
เข้าร่วมการอบรมเพื่อพัฒนาความรู้ด้านคอมพิวเตอร์
เทคโนโลยีสารสนเทศ และการประยุกต์ใช้เทคโนโลยี
ในด้านการเงินและการธนาคาร
</p>

<p>
วิทยากร: ผศ.ดร.ภารุจ รัตนวรพันธุ์
</p>

</div>



<div className="activity-card">

<h3>
โครงการ Big Family
</h3>

<p>
ทำหน้าที่พี่ฐานในโครงการ Big Family
เพื่อส่งเสริมการทำงานร่วมกับผู้อื่น
การสื่อสาร และการทำกิจกรรมร่วมกันภายในสาขา
</p>

<p>
ช่วงเวลา: 2024 - 2025
</p>

</div>

</div>


</section>

</section>

</div>

)

}



export default App
