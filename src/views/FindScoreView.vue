<script setup>
</script>
<template>
    <div>
        <div class="testimonials-area bg-color " style="height: 2px;"></div>
        <section class="apply-area ptb-100">
            <div class="container">
                <div class="apply-form">
                    <form>
                        <div class="content">
                            <h4>შედეგების სანახავად საძიებო ველში შეიყვანეთ მოსწავლის პირადი ნომერი</h4>
                        </div>
                        <div class="row">
                            <div class="col-lg-7 col-md-6 ">
                                <div class="form-group ">
                                    <input type="text" class="form-control" placeholder="01013421561">
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <div class="form-group ">
                                    <select class="form-select form-control" id="inputGroupSelect01">
                                        <option selected>აირჩიე ოლიმპიადა</option>
                                        <option value="1">ერთტურიანი</option>
                                        <option value="2">გუნდური</option>
                                        <option value="3">მათემატიკის</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="default-btn">
                            <i class="bx bx-search"></i>
                            ძებნა
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>