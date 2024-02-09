<template>
    <section class="event-area bg-ffffff bg-color pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span>ოლიმპიადები</span>
                <h2>მიმდინარე ოლიმპიადები</h2>
            </div>

            <div class="event-box-item" v-for="(item, index) in 2" :key="index">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="my-event-image" >
                            <a href="#"><img class="rounded-4" src="@/assets/img/event/math.jpg" alt="image" style=""></a>
                        </div>
                    </div>

                    <div class="col-md-5">
                        <div class="event-content">
                            <h3>
                                <a href="#">მათემატიკის ოლიმპიადა</a>
                            </h3>
                            <ul class="event-list">
                                <li>
                                    <i class='bx bx-time'></i>
                                    8:00 - 10:00 
                                </li>
                                <li>
                                    <i class='bx bxs-hourglass-top'></i>
                                    50 წუთი
                                </li>
                                <li>
                                    <i class='bx bx-user'></i>
                                    II, III, IV, V ; VI; VII კლასის მოსწავლეები
                                </li>
                                <!-- <li>
                                    <i class='bx bxs-map'></i>
                                    New York 56 Glassford Street Glasgow
                                </li> -->
                                <li>
                                    <i class='bx bx-gift'></i>
                                    I, II და III ადგილოსნები დაჯილდოვდებიან ფასიანი საჩუქრებით
                                </li>
                                <li>
                                    <i class='bx bx-money'></i>
                                    30 ₾
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="event-date ">
                            <h4>12</h4>
                            <span class="d-block">September</span>
                            <a href="#" class="default-btn mt-5">რეგისტრაცია</a>
                        </div>
                        <div class="">
                            <!-- <a href="#" class="default-btn">რეგისტრაცია</a> -->
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(item, index) in 3" :key="index">
                            <div class="single-class">
                                <div class="class-image">
                                    <a href="#">
                                        <img src="@/assets/img/class/class-2.jpg" alt="image">
                                    </a>
                                </div>

                                <div class="class-content">
                                    <div class="price">50₾</div>
                                    <h3>
                                        <a href="#">მატემატიკის ოლიმპიადა</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <ul class="class-list">
                                        <li>
                                            <span>ასაკი:</span>
                                            3-5 Year
                                        </li>
                                        <li>
                                            <span>დრო:</span>
                                            8-10 AM
                                        </li>
                                        <li>
                                            <span>ადგილი:</span>
                                            25
                                        </li>
                                    </ul>

                                    <div class="class-btn">
                                        <a href="#" class="default-btn">რეგისტრაცია</a>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>            
                        -->

            
        </div>
    </section>
</template>