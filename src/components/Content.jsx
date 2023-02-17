import React from 'react'

const Content = () => {
    return <main>
    <h3 className='Header'>Техника в наличии</h3>
    <hr></hr>
    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class='card'>
                    <h3>Беззеркальная камера Sony ZV-1 черная</h3>
                    <img src='photo1.jpg' width="200" height="200" alt='Беззеркальная камера Canon EOS R10 Body черная' class="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <div class="card-body">
                        <p>20.1 Мп, 13.2 x 8.8 мм, CMOS, диафрагма: f/1.8-2.8, 100-12800 ISO, 24 кадр./сек, экран - поворотный</p>
                        <p>59 999 руб.</p>
                    </div>
                    </div>
                    
                    
                </div>
                <div class="col">
                <div class='card'>
                    <h3>Беззеркальная камера Canon EOS M200 Kit 15-45mm IS STM черная</h3>
                    <img src='photo2.jpg' width="200" height="200" alt='Беззеркальная камера Canon EOS R10 Body черная' class="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <p>25.8 Мп, 22.3 х 14.9 мм, CMOS, диафрагма: f/3.5-6.3, 100-25600 ISO, 6.1 кадр./сек, экран - поворотный, сенсорный</p>
                    <p>43 999 руб.</p>
                    </div>
                </div>
                <div class="col">
                <div class='card'>
                    <h3>Беззеркальная камера Canon EOS R10 Body черная</h3>
                    <img src='photo3.jpg' width="200" height="200" alt='Беззеркальная камера Canon EOS R10 Body черная' class="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <p>25.5 Мп, 22.3 х 14.9 мм, CMOS, 100-32000 ISO, 23 кадр./сек</p>
                    <p>67 999 руб.</p>
                    </div>
                </div>
                <div class="col">
                <div class='card'>
                    <h3>Беззеркальная камера Sony Alpha (ILCE-6400LB) Kit 16-50mm черная</h3>
                    <img src='photo4.jpg' width="200" height="200" alt='Беззеркальная камера Canon EOS R10 Body черная' class="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <p>25 Мп, 23.5 x 15.6 мм, CMOS, диафрагма: f/3.5-5.6, 100-32000 ISO, 11 кадр./сек, экран - поворотный, сенсорный</p>
                    <p>89 999 руб.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </main>
}
export default Content;