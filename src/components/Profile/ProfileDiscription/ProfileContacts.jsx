import React from 'react'

export const ProfileContacts = ({ data }) => {

   return (
      <div>
         <h3>Контакты:</h3>
         <ul>
            <li><a target='blank' href={data.contacts.github}>GitHub</a> </li>
            <li><a target='blank' href={data.contacts.mainLink}>Telegram</a> </li>
            <li><a target='blank' href={data.contacts.vk}>Вконтакте</a> </li>
            <li><a target='blank' href={data.contacts.twitter}>Twitter</a> </li>
            <li><a target='blank' href={data.contacts.youtube}>YouTube</a> </li>
            <li><a target='blank' href={data.contacts.facebook}>Facebook</a> </li>
            <li><a target='blank' href={data.contacts.instagram}>Instagram</a> </li>
            <li><a target='blank' href={data.contacts.website}>Веб-сайт</a> </li>
         </ul>
      </div >
   )
};

export default ProfileContacts;
