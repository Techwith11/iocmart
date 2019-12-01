**Installation**

Create database for project\
Copy all from _`.env.example`_ to _.`env`_ file\
In _`.env`_, enter database details\
Change **`QUEUE_DRIVER`** from _`sync`_ to _`database`_\
Enter smtp credentials to allow mail sending\
Save

Run _`php artisan migrate`_ to create tables in database\
Run _`php artisan passport:install`_ to set up passport authorization\
Run _`php artisan db:seed`_ to seed fake data into database during development\
Run _`php artisan queue:work`_ to start queue worker daemon

Warning: You might want to be connected to the internet while _`queue:work`_ is running as it sends mail which requires connectivity and throws an error if not connected
