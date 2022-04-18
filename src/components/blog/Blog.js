import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='text-center text-primary mt-3' >Do You Know ?</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Athentication vs Authorization?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h6>Authentication:</h6>
                            Authentications means to the activity a party makes to verify anothers party. such as a persons told to their identity.Authntication is  using differents methods by the verifying company.another form of authentiction is contine authentication which uses contextual information on the user and circumstances, all  kind of the risk at hand.
                            <h6>Authorization:</h6>
                            Authorization is a security mechanism used to determine user/client privileges or access levels related to system resources, including computer programs, files, services, data and application features. Authorization is normally preceded by authentication for user identity verification. System administrators (SA) are typically assigned permission levels covering all system and user resources.

                            During authorization, a system verifies an authenticated user's access rules and
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why using Firebase? what other option to implement Authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            we basically use firebase for authentication,hosting, build web, game, ios software development kit.
                            if i not use firebase , i can use Parse for backend
                            then, Back4app-parse for hosting.And BackendLess- for mobile backend & api services.We can also use kuzzel-Backend for web projects ,so on...
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services without authentication firebase provide?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google's infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;