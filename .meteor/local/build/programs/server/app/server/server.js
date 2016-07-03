(function(){Meteor.startup(function () {
  /*UploadServer.init({
    tmpDir: process.env.ELKKWEB_UPLOAD_TEMP_DIR,
    uploadDir: process.env.ELKKWEB_UPLOAD_DIR,
    checkCreateDirectories: true //create the directories for you
  });*/

  Logger = new Loggly({
        token: "85589798-f4a3-4f63-91e4-381379f9e98b",
        subdomain: "goenninger",
        auth: {
          username: "elkkweb",
          password: "Dt619pa7_"
        },
        //
        // Optional: Tag to send with EVERY log message
        //
        tags: ['ElKK WEBSITE'],
        // Optional: logs will be stored in JSON format
        json: true
      });

  if (Meteor.users.find().fetch().length == 0) {
  Accounts.createUser({username: 'mago', email: 'marian.goenninger@goenninger.net', password: 'dt720pa8'});
  }

  Accounts.config({
    forbidClientAccountCreation: true
});
});



})();
