<template>
    <div class="newsletter-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="newsletter-content">
                            <h2>გსურთ იცოდეთ როდის ჩატარდება ოლიმპიადა</h2>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <form class="newsletter-form">
                            <input type="email" class="input-newsletter" placeholder="Enter Email Address" name="EMAIL"  autocomplete="off">

                            <button type="submit">გამოწერა</button>
                            
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="newsletter-shape">
                <div class="shape-1">
                    <img src="@/assets/img/newsletter/newsletter-shape-1.png" alt="image">
                </div>
                <div class="shape-2">
                    <img src="@/assets/img/newsletter/newsletter-shape-2.png" alt="image">
                </div>
            </div>
        </div>
</template>