export const testDescription = `Mckaig is the best thing in the world.`
export const testRating = 50
export const testDate = "February 06, 2021"
export const testUser = "donnieb6680"

// Test html structure was copied from McKaig review page and is valid as of Feb 6, 2021
// Changes to this structure could break the current implementation and should be monitored/updated if needed
export const testReviewHtml = `
    <div class="review-entry col-xs-12 text-left pad-none pad-top-lg  border-bottom-teal-lt">
        <a name="r7863315"></a>
        <div class="col-xs-12 col-sm-3 pad-left-none text-center review-date margin-bottom-md">
            <div class="italic col-xs-6 col-sm-12 pad-none margin-none font-20">${testDate}</div>
            <div class="col-xs-6 col-sm-12 pad-none dealership-rating">
                <div class="rating-static visible-xs pad-none margin-none rating-${testRating} pull-right"></div>
                <div class="rating-static hidden-xs rating-${testRating} margin-center"></div>
                <div class="col-xs-12 hidden-xs pad-none margin-top-sm small-text dr-grey">SALES VISIT - USED</div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-9 pad-none review-wrapper">
        <!-- REVIEW TITLE, USER-->
        <div class="margin-bottom-sm line-height-150">
            <h3 class="no-format inline italic-bolder font-20 dark-grey">"Dealing with McKaig in Gladewater is 100% better than any..."</h3>
            <span class="italic font-18 black notranslate">- ${testUser}</span>
        </div>

        <!-- REVIEW BODY -->

        <div class="tr margin-top-md">
            <div class="td text-left valign-top ">
                <p class="font-16 review-content margin-bottom-none line-height-25">${testDescription}</p>
                    <a id="7863315" class="read-more-toggle pointer line-height-25 small-text block margin-bottom-md">Read More</a>
            </div>
        </div>
    </div>`
