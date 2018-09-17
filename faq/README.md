# FAQ for Kitsu

* [How to create filters?](#how-to-create-filters)
	* [Introduction to filters](#introduction-to-filters)
	* [How to use the search bar?](#how-to-use-the-search-bar)
	* [How to save filter queries?](#how-to-save-filter-queries)
	* [What filters can I create?](#what-filters-can-i-create)
	* [How to delete filters?](#how-to-delete-filters)


 * [Where I can see my notifications?](#where-can-i-see-my-notifications)
	* [How notifications work?](#how-notifications-work)
	* [How to get notified?](#how-to-get-notified)
	* [How to not be notified anymore](#how-to-not-be-notified-anymore)


* [How to build a playlist?](#how-to-build-a-playlist)
	* [How to create a playlist?](#how-to-create-a-playlist)
	* [How to switch between tasks and revisions?](#how-to-switch-between-tasks-and-revisions)
	* [How to delete a playlist?](#how-to-delete-a-playlist)

-----------------------------------------	
 
## [How to create Filters?](#how-to-create-filters)

### [Introduction to filters](#introduction-to-filters)

In **Kitsu**, the filters are done through the **Search bar**. It allows you to
**save** your search query. Once done you can run your query again with a
simple click.
 
![Search bar](../img/faq/filter_search_bar.png)

You can find the **search bar** and the **save** option in the following pages: 

* Assets
* Shots
* Sequences
* Todo-lists

![Search bar](../img/faq/filter_save_button.png).

NB: The **Search bar** is available too in people episodes list.


### [How to use the search bar?](#how-to-use-the-search-bar)

The **search bar** query is applied everytime a new character is typed. You
don't need to type everything to get a prompt result.

For example, in the assets page, type the letter `V` and you wil get the
result of all the assets starting with a `V`.  

![Search bar result](../img/faq/filter_autocompletion.png)

You can also search some specific **type of asset** : `Props`, `Character`,
`Environment`, `Fx` ... The result will display all the assets from this type.

For example, lets search all the **FX** assets. 
	
![Search asset type](../img/faq/filter_asset_type.png)

Another example get **shots page** of a specific **sequence**.
Ex: see only the shots of the first sequence of the first episode.

If you type `s001` the result will get all the shots of all the episodes
from sequence 1.

![Search bar sequence episode](../img/faq/filter_ep_seq.png)

To be more specific you have to add information to your search. Let's type
`e001 s001`.

![Search bar sequence 1 episode 1](../img/faq/filter_ep_seq1.png)

Then you get all shots for sequence 1 of episode 1.

In the same way, you can search **specific status** link to task. Type the
**name of the task** (or the **first letters**), then add the sign **equal**
(`=`) and the status you are looking for.

For example, search all the shots which are **Waiting for approval** (**WFA**)
at the **Layout** stage. So on the search bar you will type : `layout=wfa` or
`lay=wfa`.

![Search layout wfa](../img/faq/filter_lay_wfa.png)

You can be even more specific, lets focus on the first episode : on the search
bar add a **space** after the previous search and type `e001`. You can be even
more precise and ask to see only the sequence 2. The research will be `lay=wfa
e001 s002` or `s002 e001 layout=wfa`.

![Search layout wfa seq2](../img/faq/filter_lay_wfa_s002.png)


### [How to save filter queries?](#how-to-save-filter-queries)

Kitsu allows you to save your research. You can save them by pressing tne
**Enter**, or click on the **Save** button 
![Save button](../img/faq/filter_save_button.png).

Now under the **search bar** you can see your saved queries as buttons. 

![Search saved](../img/faq/filter_saved.png)

Everytime you get back to this page, the buttons will be there. It will help
you to run commont queries faster.

### [What filters can I create?](#what-filters-can-i-create)

You can create **filters** about **entities** :

* **Episodes** : `e001`, `e002` etc.  
* **Sequences** : `e001 s001`, `s001 s001` etc.
* **Asset Type** : `characters`, `environment`, `fx` etc.

You can also create **filters** about **task status**: always use
**task=status**, you don't have to type all the letter of the task, Kitsu will
understand only the first. But the status has to be fully typed.

* Layout is Work in progress (wip) : `layout=wip` or `lay=wip`
* Concept is waiting for approval (wfa) only for the fx : `concept=wfa fx` or `fx con=wfa`
* On episode 2 Layout is wip : `e002 lay=wip` or `layout=wip e002`


### [How to delete filters?](#how-to-delete-filters)

If you have created a **Filter button** by mistake, click on the cross next to
it ![Filter delete](../img/faq/filter_delete.png).

The result of the filter will be display, but not the button anymore. Just
cancel your research by deleting the text or use the cross next to the search
bar ![Search delete](../img/faq/filter_cross_delete.png)

-----------------------------------------

## [Where can I see my notifications?](#where-can-i-see-notifications)

### [How notifications work?](#how-notifications-work)

The notification symbol is the **Bell** button next to your name, top right of
the screen.  Its color is **grey** 
![Notification off](../img/faq/notification_icon_off.png) when you don't have
any notification, and **green** 
![Notification on](../img/faq/notification_icon_on.png) when you have a new
one.

When you click on the **bell** button, it will open the **notifications** page.

There, you can see all the changes made to the **tasks** you are following or
assigned to you.

![Notification page](../img/faq/notification_page.png)

There is a lot of informations on a notification : 

* (1) the name of the **author**
* (2) the related **entity**
* (3) the related **task**
* (4) the new **status**
* (5) the **attached file**

and (6) the comment.

Each part is a **link** you can use to jump on the information you need. If you
click on the **status**, you will jump to the status page of the entity. So you
can react quickly to this new change.

For example, let's assign Jacques to a new task and ask him to work on it.

![Notification example 01](../img/faq/notification_example01.png)

Jacques receives immediately a notification, the **bell** button change color
![Notification on](../img/faq/notification_icon_on.png) , and he can read the
new comment.

**All the notifications and comments appear in real time**. No need to refresh
to stay up to date.

![Notification example 02](../img/faq/notification_example02.png)

### [How to get notified?](#how-to-get-notified)

As an artist you will receive a notification 
![Notification](../img/faq/notification_icon_on.png) as soon as someone change
the status of one of your task, or post a comment.

You can also choose to follow specifics tasks. Go into the task page you want
to follow: on the **assets** or **shots** pages click onto the status icon.

On the top right side of the page you can see an **eye** button, next to the
**delete task** button.

![Follow button](../img/faq/notification_other_task.png)

By default you are following all the tasks you are assigned to, on the task
page the icon will be **open** ![Notification on](../img/faq/notification_on.png). 

If you want to follow another task, just click on the **crossed eye** button
![Notification off](../img/faq/notification_off.png), it will change, not
crossed anymore ![Notification on](../img/faq/notification_on.png) meaning you
are now following this task, and will receive notification about it. 

### [How to not be notified anymore?](#how-to-not-be-notified-anymore)

If you don't want to follow a task anymore, just click on the **eye** button
![Notification on](../img/faq/notification_on.png) on the task page. It 
will be crossed ![Notification off](../img/faq/notification_off.png), meaning
you won't receive notifications anymore.


------------------------------------


## [How to build a Playlist?](#how-to-build-a-playlist)


### [How to create a playlist?](#how-to-create-a-playlist)

You can find the **Playlists** page on the **main menu** 
![Main menu](../img/faq/main_button.png) under the **Production** section. 

![Playlist main menu](../img/faq/playlist_main_menu.png)

The **playlists** page is separated in 3 parts: 

* (1): The playlist list where you can **create** a playlist, or load an existing one.
* (2): The shots of the current playlist. 
* (3): The **shots** you want to show.

![Playlist page](../img/faq/playlist_page.png)

Start by creating a **Playlist** 
![Playlist add button](../img/faq/playlist_add_button.png), You default name
will be the date and the hour. You can change it later via the
**Edit** button ![Edit button](../img/faq/edit_button.png). 

![Playlist add page](../img/faq/playlist_add_page.png)

Once the playlist created, via the right pane, you can select wich shots to add
to your playlist.  Start by selecting the **episode** and the **sequence**.
The sequences shots are now listed. Click on the shots you want to add to the
playlist to see them playlisted.

The shots will appear on the middle part of the screen. Every changes are 
automatically saved.

![Playlist page](../img/faq/playlist_example.png)

### [How to switch between tasks and revisions?](#how-to-switch-between-tasks-and-revisions)

For each playlisted shot you can choose the **task** and the
**version** you want to see.

![Playlist task selection](../img/faq/playlist_task_selection.png)
![Playlist version selection](../img/faq/playlist_version_selection.png)


### [How to delete a playlist?](#how-to-delete-a-playlist)

To delete a playlist, load it by clicking on its name. Then,
click on the **delete** button ![delete button](../img/faq/delete_button.png). 
The button is located in the top right of the middle pane.

A confirmation pop-up will appear. Validate it by clicking the **Confirm**
button.

![Playlist delete popup](../img/faq/playlist_delete.png)
